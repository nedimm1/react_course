import "./TabStyles.css"

export default function TabButton({children}){
    return(
        <li class="list-container"><button class="list-button">{children}</button></li>
    )
}