import { Wrapper, LoaderText } from "./Loader.styled"
import { InfinitySpin } from "react-loader-spinner"

export default function Loader(){
    return (
        <Wrapper>
            <InfinitySpin width='100' color='#000'/>
            <LoaderText>Waiting...</LoaderText>
        </Wrapper>
    )
}
