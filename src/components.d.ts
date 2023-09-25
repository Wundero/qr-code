/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AnimationPreset, QRCodeAnimation } from "./components/qr-code/animations";
export { AnimationPreset, QRCodeAnimation } from "./components/qr-code/animations";
export namespace Components {
    interface QrCode {
        "animateQRCode": (animation?: AnimationPreset | QRCodeAnimation) => Promise<void>;
        "contents": string;
        "getModuleCount": () => Promise<number>;
        "maskXToYRatio": number;
        "moduleColor": string;
        "positionCenterColor": string;
        "positionRingColor": string;
        "protocol": string;
        "squares": boolean;
    }
}
export interface QrCodeCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLQrCodeElement;
}
declare global {
    interface HTMLQrCodeElement extends Components.QrCode, HTMLStencilElement {
    }
    var HTMLQrCodeElement: {
        prototype: HTMLQrCodeElement;
        new (): HTMLQrCodeElement;
    };
    interface HTMLElementTagNameMap {
        "qr-code": HTMLQrCodeElement;
    }
}
declare namespace LocalJSX {
    interface QrCode {
        "contents"?: string;
        "maskXToYRatio"?: number;
        "moduleColor"?: string;
        "onCodeRendered"?: (event: QrCodeCustomEvent<any>) => void;
        "positionCenterColor"?: string;
        "positionRingColor"?: string;
        "protocol"?: string;
        "squares"?: boolean;
    }
    interface IntrinsicElements {
        "qr-code": QrCode;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "qr-code": LocalJSX.QrCode & JSXBase.HTMLAttributes<HTMLQrCodeElement>;
        }
    }
}
