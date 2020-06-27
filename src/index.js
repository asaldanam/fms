import Vue from 'vue/dist/vue.js';

(function () {
  // eslint-disable-next-line no-unused-vars
  var initOverlay;

  function singleLineString(strings, ...values) {
    let output = '';

    for (let i = 0; i < values.length; i++) {
      output += strings[i] + values[i];
    }

    output += strings[values.length];
    let lines = output.split(/(?:\r\n|\n|\r)/);

    return lines.map((line) => {
      return line.replace(/^\s+/gm, '');
    }).join(' ').trim();
  }

  function initOverlayTemplate() {
    const template = singleLineString/* html */`
      <div class="fms-control-bar">
        <button @click="enableWorkspaces = !enableWorkspaces">
          <span>Toggle</span>
        </button>
      </div>
      <div v-for="workspace in workspaces" 
        class="fms-workspace"
        v-if="enableWorkspaces"
        :class="{ 'fms-workspace--active': editing === workspace.key }"
        :fms-workspace-id="workspace.key"
        :style="workspace.style"
        :key="workspace.key"
      >

        <header class="fms-workspace-toolbar"  v-if="editing !== workspace.key">
          <!-- Edit -->
          <button class="fms-workspace-toolbar-button" @click="edit(workspace.key)">
            <i class="fms-icon">edit</i>
            <span>{{workspace.key}}</span>
          </button>
        </header>

        <header class="fms-workspace-toolbar"  v-if="editing === workspace.key">
          <!-- Accept change -->
          <button class="fms-workspace-toolbar-button" v-if="editing === workspace.key" @click="acceptChange(workspace.key)">
            <i class="fms-icon">done</i>
          </button>
          <!-- Discard change -->
          <button class="fms-workspace-toolbar-button" v-if="editing === workspace.key" @click="discardChange(workspace.key)">
            <i class="fms-icon">close</i>
          </button>
        </header>

      </div>
    `;

    const overlay = document.createElement('div');

    overlay.id = 'fms-overlay';
    document.body.appendChild(overlay);
    overlay.innerHTML = template;
  }

  initOverlayTemplate();

  initOverlay = new Vue({
    el: '#fms-overlay',

    data: {
      enableWorkspaces: true,
      DOMChangesListener: null,
      cacheInnerHTML: '',
      editing: '',
      workspaces: []
    },

    created: function () {

      this.DOMChangesListener = new MutationObserver((changes) => {
        this.calcWorkspaces();
      });

      this.DOMChangesListener.observe(document.body, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true
      });

      window.addEventListener('resize', () => {
        this.calcWorkspaces();
      });

    },

    methods: {

      calcWorkspaces: function () {
        const nodes = document.querySelectorAll('[fms-key]') || [];

        this.workspaces = [...nodes].map(el => {
          const rect = (el.getClientRects() || [])[0] || {};

          return {
            key: el.getAttribute('fms-key'),
            style: {
              width: rect.width + 'px',
              height: rect.height + 'px',
              transform: `translate(${rect.x}px, ${rect.y}px)`
            }
          };
        });
      },

      selectText: function (ele) {
        const range = document.createRange();

        range.selectNodeContents(ele);
        const sel = window.getSelection();

        sel.removeAllRanges();
        sel.addRange(range);
      },

      edit: function (key) {
        this.editing = key;
        const element = document.querySelector(`[fms-key="${key}"]`);

        this.cacheInnerHTML = element.innerHTML;
        console.log(this.cacheInnerHTML);
      },

      acceptChange: function (key) {
        this.editing = '';
        this.cacheInnerHTML = '';
        window.getSelection().removeAllRanges();
      },

      discardChange: function (key) {
        this.editing = '';
        const element = document.querySelector(`[fms-key="${key}"]`);
        element.innerHTML = this.cacheInnerHTML;
        this.cacheInnerHTML = '';
        window.getSelection().removeAllRanges();
      },

      toggleEditing(elementKey) {
        const nodes = document.querySelectorAll('[fms-key]') || [];

        nodes.forEach(el => {
          el.contentEditable = false;
        });
        const element = document.querySelector(`[fms-key="${elementKey}"]`);

        if (element) {
          element.contentEditable = true;
          element.focus();
          this.selectText(element);
        }
      }

    },

    watch: {
      editing: function (val) {
        this.toggleEditing(val);
      }
    }

  });
})();

