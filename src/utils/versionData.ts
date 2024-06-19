import config from './config';
export const getVersion = (): string => {
    return config.VITE_APP_VERSION != null ? config.VITE_APP_VERSION : "undefind";
}