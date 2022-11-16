import classes from './Switcher.module.css';

interface ISwitcherProps {
  name: string;
  id: string;
  onToggle: (checked: boolean) => void;
}

function Switcher(props: ISwitcherProps) {
  return (
    <div className={classes['toggle-switch-wrapper']}>
      <p>
        {props.name} (<u>optional</u>):
      </p>
      <div className={classes['toggle-switch']}>
        {' '}
        <input
          type="checkbox"
          className={classes['toggle-switch-checkbox']}
          name={props.name}
          id={props.name}
          onChange={(e) => props.onToggle(e.target.checked)}
        />
        <label className={classes['toggle-switch-label']} htmlFor={props.name}>
          <span className={classes['toggle-switch-inner']} data-on="on" data-off="off" />
          <span className={classes['toggle-switch-switch']} />
        </label>
      </div>
    </div>
  );
}

export default Switcher;
