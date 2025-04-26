import classes from './index.module.css'

type Props = {
    orientation: 'vertical' | 'horizontal';
}

const Separator = ({ orientation }: Props) => {
  return (
    <div className={`${classes[orientation]} ${classes.separator}`}></div>
  )
}
export default Separator;