export type UserType = 'PLAYER' | 'DM' | 'NONE';

export const userConfig = {
  PLAYER: {
    greeting: (disaplayName: string) => `Welcome, ${disaplayName}, adventure awaits!`,
    displayName: 'Player',
  },
  DM: {
    greeting: (disaplayName: string) => `${disaplayName},\n how do you wanna do this?`,
    displayName: 'Dungeon Master'
  },
  NONE: {
    greeting: (disaplayName: string) => `Welcome Adventurer!`,
    displayName: 'Login'
  }
}
