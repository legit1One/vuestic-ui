import type { ColorConfig } from '../color-config/color-config'
import type { HelperConfig } from '../color-config/color-css-helpers-updater'
import type { ComponentConfig, Props } from '../component-config/component-config'
import type { IconConfig } from '../icon-config/types'

export type GlobalConfig = {
  colors?: ColorConfig,
  icons?: IconConfig,
  classHelpers?: HelperConfig[],
  components?: ComponentConfig
  componentsAll?: Props
}

export type SizeConfig = {
  defaultSize?: number,
  sizes?: { [sizeName: string]: number | string },
}

export type GlobalConfigUpdater = (config: GlobalConfig) => GlobalConfig;
export type {
  ColorConfig,
  ComponentConfig,
  IconConfig,
}
