import ReactLoading, { LoadingType } from "react-loading";


interface LoadingProps {
    type: LoadingType;
    color: string;
    width?: string;
    height?: string;
}

export function Loading(props: LoadingProps) {
    return (
        <ReactLoading type={props.type} color={props.color} width={props.width ? props.width : "10%"} height={props.height ? props.height : "10%"} />
    )
}