# mount-aware-component

> Add mount awareness to class-based React components.

When using ES6 classes, `Component.isMounted()` is not available and it is recommended to instead clean up all
pending timeout and requests in `componentWillUnmount()`. However, there are at least two cases where this is not easily
possible:

  1) when using `fetch()` since it cannot be canceled like AJAX requests can (see [here](https://github.com/whatwg/fetch/issues/27))
  2) when using promises that can not be canceled synchronously (or at all)

As a workaround, this component keeps track of its mounted state manually (see [here](https://github.com/facebook/react/issues/3417)) and provides helper functions to allow its subclass perform actions only if it is still mounted.

### Usage

```js
import MountAwareComponent from 'mount-aware-component';

class MyComponent extends MountAwareComponent {
    foo() {
        doSomethingAsync().then(function (result) {
            this.setStateIfMounted({ bar: result.bar });
        }.bind(this));
    }

    baz() {
        doSomethingAsync().then(function () {
            this.forceUpdateIfMounted();
        }.bind(this));
    }
}
```