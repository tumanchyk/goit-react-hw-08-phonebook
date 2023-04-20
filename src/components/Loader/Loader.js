import { Container } from "./Loader.styled"
import { LineWave } from  'react-loader-spinner'

export const Loader = ()=>{
return <Container>    
    <LineWave
    height="150"
    width="150"
    color="tomato"
    ariaLabel="line-wave"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    firstLineColor=""
    middleLineColor=""
    lastLineColor=""
    />
</Container>
}