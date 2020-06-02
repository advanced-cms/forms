define([
    "dojo/_base/declare",
    "epi-forms/contentediting/editors/ContentAreaEditor",
    "episerver-labs-block-enhancements/inline-editing/commands/update-commands",
    "episerver-labs-block-enhancements/inline-publish/commands/update-commands"
], function (
    declare,
    ContentAreaEditor,
    updateInlineEditCommands,
    updateInlinePublishCommands
) {
    return declare([ContentAreaEditor], {
        blockEnhancementsOptions: {},

        update: function (value) {
            this.set("value", value);
            if (this.parent) {
                this.parent.set("editing", true);
            }
            this.onChange(value);
        },
        postMixInProperties: function () {
            this.inherited(arguments);
            if (this.advancedFormsOptions.inlinePublish) {
                updateInlinePublishCommands(this);
            }
            if (this.advancedFormsOptions.inlineEditing) {
                updateInlineEditCommands(this);
            }
        },
        _getCreateNewBlockCommand: function () {
            var command = this.inherited(arguments);
            command.set("autoPublish", true);
            return command;
        }
    });
});
