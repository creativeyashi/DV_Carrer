import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function Cart() {
const [itemCount, setItemCount] = React.useState(0);

return (
	<div style={{ display: "block", padding: 30 }}>
	<div>
		<Button onClick={() => {setItemCount(Math.max(itemCount - 1, 0));}}>
		<RemoveIcon fontSize="small" />
		</Button>
        <Badge color="secondary" badgeContent={itemCount}>
		<ShoppingCartIcon />{" "}
		</Badge>
		<Button onClick={() => {setItemCount(itemCount + 1);}}>
		<AddIcon fontSize="small" />
		</Button>
	</div>
	</div>
    );
}
