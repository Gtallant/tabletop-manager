export type UserType = 'PLAYER' | 'DM' | 'NONE';

export const userTypecast = (userType: any): UserType => {
  if (userType === 'DM') {
    return 'DM';
  }
  if (userType === 'PLAYER') {
    return 'PLAYER';
  }
  return 'NONE';
};

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
