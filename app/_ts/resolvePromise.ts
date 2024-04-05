import { PromiseState } from "./types";

export function resolvePromise<T>(promise: Promise<T>, state: PromiseState<T>) {
    if (promise) {
        state.promise = promise;
        state.data = null;
        state.error = null;

        promise.then(addDataACB).catch(setErrorACB);
    }

    function addDataACB(result: T) {
        if (state.promise === promise) {
            state.data = result;
        }
    }

    function setErrorACB(reason: any) {
        if (state.promise === promise) {
            state.error = reason;
        }
    }
}
