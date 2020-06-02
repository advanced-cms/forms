define([
    "dojo/_base/declare",
    "epi-forms/widget/overlay/ContentArea",
    "epi-cms/widget/overlay/Block",
    "epi-cms/contentediting/command/ContentAreaCommands",
    "episerver-labs-block-enhancements/inline-editing/commands/update-commands",
    "episerver-labs-block-enhancements/inline-publish/commands/update-commands"
], function (
    declare,
    ContentArea,
    Block,
    ContentAreaCommands,
    updateInlineEditCommands,
    updateInlinePublishCommands
) {
    var CustomBlockClass = declare([Block], {
        blockEnhancementsOptions: {},

        postCreate: function () {
            this.commandProvider = new ContentAreaCommands({model: this.viewModel});
            if (this.advancedFormsOptions.inlinePublish) {
                updateInlinePublishCommands(this.commandProvider);
            }
            if (this.advancedFormsOptions.inlineEditing) {
                updateInlineEditCommands(this.commandProvider);
            }
            this.inherited(arguments);
        }
    });
    return declare([ContentArea], {
        blockEnhancementsOptions: {},
        blockClass: CustomBlockClass,

        postCreate: function () {
            CustomBlockClass.prototype.advancedFormsOptions = this.advancedFormsOptions;
            this.inherited(arguments);
        },

        update: function (value) {
            this.onValueChange({
                propertyName: this.name,
                value: value
            });
        },
        _getCreateNewBlockCommand: function () {
            var command = this.inherited(arguments);
            command.set("autoPublish", true);
            return command;
        }
    });
});
