import './Component.css';

function Component() {
  return (
    <div className="Component">
        <p>
          This conent was dynamically loaded as a custom HTML5 web element.
        </p>
        <slot></slot>
    </div>
  );
}

export default Component;
