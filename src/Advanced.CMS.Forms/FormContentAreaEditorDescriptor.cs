using System;
using System.Collections.Generic;
using EPiServer.Core;
using EPiServer.Forms;
using EPiServer.Shell.ObjectEditing;
using EPiServer.Shell.ObjectEditing.EditorDescriptors;

namespace Advanced.CMS.Forms
{
    [EditorDescriptorRegistration(TargetType = typeof(ContentArea), UIHint = Constants.UIHint_FormsContentAreaEditor, EditorDescriptorBehavior = EditorDescriptorBehavior.PlaceLast)]
    public class FormContentAreaEditorDescriptor : EditorDescriptor
    {
        private readonly AdvancedCMSFormsOptions _options;

        public FormContentAreaEditorDescriptor(AdvancedCMSFormsOptions options)
        {
            _options = options;
            ClientEditingClass = "advanced-cms-forms/editors/content-area-editor";
        }

        public override void ModifyMetadata(ExtendedMetadata metadata, IEnumerable<Attribute> attributes)
        {
            base.ModifyMetadata(metadata, attributes);
            metadata.ClientEditingClass = "advanced-cms-forms/editors/content-area-editor";
            metadata.OverlayConfiguration["customType"] = "advanced-cms-forms/editors/content-area";
            metadata.OverlayConfiguration["advancedFormsOptions"] = _options;
            metadata.EditorConfiguration["advancedFormsOptions"] = _options;
        }
    }
}
