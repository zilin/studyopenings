import { RolloutState } from './rolloutstate';

export enum FlagName {
  ENABLE_THEME_PALETTE = 'enable_theme_palette',
  ENABLE_STORING_PREFERENCES = 'enable_storing_preferences'
}

export const FLAG_MAP: Map<FlagName, RolloutState> = new Map();
FLAG_MAP.set(
    FlagName.ENABLE_THEME_PALETTE,
    RolloutState.LOCAL_ONLY);
FLAG_MAP.set(
    FlagName.ENABLE_STORING_PREFERENCES,
    RolloutState.LOCAL_ONLY);
