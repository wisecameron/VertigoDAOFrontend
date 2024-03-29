import { useSpring } from "react-spring"

export const ContainerStyles = (firstLoad) =>
{
    return( useSpring(
    {
        from: {marginTop: "-20vmin", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            width: "101vw", 
            background: "black",
            marginLeft: "-200vmax", 
            opacity: 0},

        to: {marginTop: "-20vmin", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            width: "101vw", 
            background: "#101010",
            marginLeft: "-46.5vmax", 
            opacity: (firstLoad) ? 1:0},

        config: {duration: (firstLoad) ? 200 : 1600},
        delay: 0
    }))
}

export const ClickHereStyles = () => 
{
    return(
        useSpring(
        {
            from: {
                color: "white", fontSize: "6vmin", opacity: 0
            },
            to: {
                color: "white", fontSize: "6vmin", opacity: 1
            },
            config: {duration: 400},
            delay: 1200
        })
    )
}