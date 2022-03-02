/* Copyright (c) 2022 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

// TypeScript 2.1 no longer allows you to extend built in types. See https://github.com/Microsoft/TypeScript/issues/12790#issuecomment-265981442
// and https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
//
// This code is from MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types.
export class ArcGISAccessDeniedError extends Error {
  /**
   * The name of this error. Will always be `"ArcGISAccessDeniedError"` to conform with the [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) class.
   */
  public name: string;

  /**
   * Formatted error message. See the [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) class for more details.
   */
  public message: string;

  /**
   * Create a new `ArcGISAccessDeniedError`  object.
   */
  constructor() {
    const message = "The user has denied your authorization request.";

    super(message);

    // restore prototype chain, see https://stackoverflow.com/questions/41102060/typescript-extending-error-class
    // we don't need to check for Object.setPrototypeOf as in the answers becasue we are ES2017 now
    const actualProto = new.target.prototype;
    Object.setPrototypeOf(this, actualProto);

    this.name = "ArcGISAccessDeniedError";
  }
}
