![Advanced CMS](assets/logo.png "Advanced CMS")

# Advanced Forms

DEPRECATED! THIS PACKAGE IS NO LONGER NEEDED SINCE EPISERVER 11.34.0 https://nuget.episerver.com/package/?id=EPiServer.CMS.UI.Core&v=11.34.0

PLEASE UNINSTALL IT AND UPGRADE CMS UI

Episerver 11+ extension that enhances the Forms editing experience.

Editor is now able to edit every form inline, without the need to switch the editing context.
Just double click any `Form Element` to edit its properties.

![Edit Form Properties](assets/documentation/inline_edit_form.gif "Edit Form Properties")

![Add Form Elements](assets/documentation/inline-form-add.gif "Add Form Elements")

## Configuring enabled features

To turn off one or more feature, use the `AdvancedCMSFormsOptions` options class and then, for example, in the initialization module, set `false` on the feature that should not be available. All features are enabled by default. 
 
```csharp
[InitializableModule]
public class CustomFormsModule : IInitializableHttpModule
{
    public void Initialize(InitializationEngine context)
    {
        var options = ServiceLocator.Current.GetInstance<AdvancedCMSFormsOptions>();
        options.InlineEditing = false;
        options.InlinePublish = false;
    }

    public void Uninitialize(InitializationEngine context)  {  }

    public void InitializeHttpEvents(HttpApplication application) {  }
}
 ```

## Install

```Install-Package Advanced.CMS.Forms```

https://nuget.episerver.com/package/?id=Advanced.CMS.Forms
