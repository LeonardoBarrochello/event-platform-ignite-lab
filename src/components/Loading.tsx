import ReactLoading, { LoadingType } from "react-loading";


interface LoadingProps {
    type: LoadingType;
    color: string
}

export function Loading(props: LoadingProps) {
    return (
        <ReactLoading type={props.type} color={props.color} width={"10%"} height={"10%"} />
    )
}