define([
    "dojo/_base/declare",
    "epi/_Module",
    "epi-forms/widget/FieldSelectorDialog",
    "episerver-labs-block-enhancements/inline-editing/commands/inline-edit",
    "epi-cms/widget/command/CreateContentFromSelector",
    "epi-forms/widget/command/CreateContentFromSelector",
    "epi-cms/contentediting/viewmodel/CreateContentViewModel",
    "epi-forms/widget/ChoiceItemWithSelection"
], function (
    declare,
    _Module,
    FieldSelectorDialog,
    InlineEdit,
    CreateContentFromSelector,
    FormsCreateContentFromSelector,
    CreateContentViewModel,
    ChoiceItemWithSelection
) {
    return declare([_Module], {
        initialize: function () {
            this.inherited(arguments);

            var contentData;

            var originalMethod = InlineEdit.prototype._refreshContentSettings;
            InlineEdit.prototype._refreshContentSettings = function (content) {
                originalMethod.apply(this, arguments);

                contentData = content;
            }

            var originalBuildRendering = FieldSelectorDialog.prototype.buildRendering;
            FieldSelectorDialog.prototype.buildRendering = function () {
                this.model._currentContext = {
                    parentLink: contentData.parentLink,
                    id: contentData.contentLink
                };

                originalBuildRendering.apply(this, arguments);
            }

            var original = CreateContentFromSelector.prototype._switchView;
            FormsCreateContentFromSelector.prototype._switchView = function() {
                original.apply(this, arguments);
            }

            var originalValidate = ChoiceItemWithSelection.prototype.validate;
            ChoiceItemWithSelection.prototype.validate = function (ddl, data) {
                originalValidate.apply(this, arguments);
                return true;
            }
        }
    });
});
