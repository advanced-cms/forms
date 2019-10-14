using EPiServer.ServiceLocation;

namespace Advanced.CMS.Forms
{
    [Options]
    public class AdvancedCMSFormsOptions
    {
        public bool InlineEditing { get; set; } = true;
        public bool InlinePublish { get; set; } = true;
    }
}