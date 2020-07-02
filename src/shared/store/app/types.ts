export type Locale = 'en_US' | 'zh_CN';
export type Token = '';
export type UserInfo = null;

export type AppState = Readonly<{ locale: Locale; token: Token; userInfo: UserInfo }>;

export type Action = {
    type: string;
    payload: any;
};
