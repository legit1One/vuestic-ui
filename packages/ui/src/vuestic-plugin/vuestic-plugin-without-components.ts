import type { GlobalConfig } from '../main'
import type { App } from 'vue'
import { DropdownPopperSubplugin, ToastInstall, GlobalConfigPlugin, ColorHelpersPlugin, ClassHelpersPlugin } from './vuestic-plugins'

export const VuesticPluginsWithoutComponents = {
  install (app: App, vuesticConfig: Partial<GlobalConfig>): void {
    app.use(DropdownPopperSubplugin)

    app.use(ToastInstall)

    app.use(GlobalConfigPlugin, vuesticConfig)

    app.use(ColorHelpersPlugin)

    app.use(ClassHelpersPlugin)
  },
}
