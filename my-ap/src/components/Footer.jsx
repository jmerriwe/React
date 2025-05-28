export const Footer = () => {
const today = new Date();

const formattedDate = today.toLocaleDateString();

return(
<div>
    <h3>{formattedDate}</h3>
    </div>
)
}
