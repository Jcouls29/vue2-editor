// Type definitions for vue2-editor 2.6.7

import { Component } from "vue/types/options";

declare namespace VueEditor {
    type ToolbarHandler = (value: any) => {};

    interface ToolbarOptions {
        container: Array<any>,
        handlers: { [key: string]: ToolbarHandler }
    }
}

declare const VueEditor: Component<any, any, any, {
    id?: string,
    placeholder?: string,
    value?: string,
    disabled?: boolean,
    editorToolbar?: Array<any> | VueEditor.ToolbarOptions,
    editorOptions?: object,
    useCustomImageHandler?: boolean,
    useMarkdownShortcuts?: boolean,
}>;

export default VueEditor;