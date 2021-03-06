export declare class PlayerSdk {
    private static DEFAULT_IFRAME_URL;
    private iframe;
    private playerReady;
    private onceReadyCallbacks;
    private userEventListeners;
    private sdkPlayerId;
    private sdkOrigin;
    private playerOrigin;
    private postMessageCallbacks;
    private iframeUrl;
    static nextSdkPlayerId: number;
    constructor(targetSelector: string, options?: any);
    createNewPlayer(iframe: HTMLIFrameElement, options: any): void;
    bindExistingPlayer(iframe: HTMLIFrameElement): void;
    addParametersInIframeHash(url: string): string;
    addParameterInIframeHash(url: string, parameter: string, value?: string): string;
    play(): void;
    pause(): void;
    mute(): void;
    unmute(): void;
    seek(time: number): void;
    setCurrentTime(time: number): void;
    setVolume(volume: number): void;
    setLoop(loop: boolean): void;
    getPaused(callback: (paused: Boolean) => void): void;
    getMuted(callback: (muted: Boolean) => void): void;
    getDuration(callback: (duration: Number) => void): void;
    getCurrentTime(callback: (currentTime: Number) => void): void;
    getVolume(callback: (volume: Number) => void): void;
    getLoop(callback: (loop: Boolean) => void): void;
    addEventListener(event: string, callback: () => void): void;
    destroy(): void;
    private urlParametersFromOptions;
    private onEvent;
    private onReady;
    private postMessage;
    private makeId;
    private createIframe;
    private setIframeSrc;
}
