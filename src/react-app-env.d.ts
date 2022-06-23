/// <reference types="react-scripts" />

declare module 'coco-message' {
  type CoCoMessage = {
    success(text: string): void
  }
  declare const cocoMessage: CoCoMessage
  export default cocoMessage
}
