define([
    "dojo/_base/declare",
    "epi/_Module",
    "epi-forms/widget/FieldSelectorDialog",
    "episerver-labs-block-enhancements/inline-editing/commands/inline-edit"
], function (
    declare,
    _Module,
    FieldSelectorDialog,
    InlineEdit
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
        }
    });
});
