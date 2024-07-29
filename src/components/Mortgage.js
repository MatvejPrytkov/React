export const Mortgage = (props) => {
  let {S, p, n} = props;
  p=p/1200
  n=n*12
  const A = S*p/(1-(1+p)**(-n))
  return <span>{A.toFixed(2)}руб</span>
}
