import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		marginTop: theme.spacing(3),
		overflowX: "auto"
	},
	table: {
		minWidth: 650
	}
}));

function createData(nombreEquipo, puntosFairPlay) {
	return { nombreEquipo, puntosFairPlay };
}

const rows = [
	createData("Frozen yoghurt", 159),
	createData("Ice cream sandwich", 237),
	createData("Eclair", 262),
	createData("Cupcake", 305),
	createData("Gingerbread", 356)
];

export default function SimpleTable() {
	const classes = useStyles();

	let equipos = [];

	const ordenarFP = (equipos) => {
		return equipos.sort((a,b) => (a.puntosAmarillas + a.puntosRojas < b.puntosAmarillas + b.puntosRojas) ? 1 :
									((a.puntosAmarillas + a.puntosRojas > b.puntosAmarillas + b.puntosRojas) ? -1 : 0));
	}

	const equiposFPOrdenados = equipos.sort(ordenarFP());

	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell>Equipo</TableCell>
						<TableCell align="right">Puntos Fair Play</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow key={row.nombreEquipo}>
							<TableCell component="th" scope="row">
								{row.nombreEquipo}
							</TableCell>
							<TableCell align="right">{row.puntosFairPlay}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Paper>
	);
}
