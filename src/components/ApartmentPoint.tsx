import { makeStyles } from "@material-ui/styles"

type ApartmentPonitProps = {
    cost_per_night: number
  onClick: () => void
}

const styles = makeStyles({
  root:{
    background: 'white',
    borderRadius: '12px',
    padding: '8px',
    width: '60px',
    fontWeight:'bold',
    zIndex: 1000,
    position: 'relative'
  }
})

const ApartmentPoint = (props: ApartmentPonitProps) => {
  const classes = styles()
  return (
    <div className={classes.root} onClick={props.onClick}>
      {props.cost_per_night} $
    </div>
  )
}

export default ApartmentPoint