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

function createData(nombreEquipo, puntos, gF, gC, dG) {
	return { nombreEquipo, puntos, gF, gC, dG };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9)
];

export default function SimpleTable() {
	const classes = useStyles();

	function ordenarCompletados2(equipo1,equipo2) {
		if (equipo1.puntos > equipo2.puntos) {
			return 1;
		} else if (equipo1.puntos < equipo2.puntos) { 
			return -1;
		}
	
		if (equipo1.dg > equipo2.dg) { 
			return 1;
		} else if (equipo1.dg < equipo2.dg) {
			return -1
		}
		
		if (equipo1.gf > equipo2.gf) { 
			return 1;
		} else if (equipo1.gf < equipo2.gf) {
			return -1
		}
		else { 
			return 0;
		}
	}

	const ordenarCompletados = (equipos) => {
		return equipos.sort((a,b) => (a.puntos > b.puntos) ? 1 : ((b.puntos > a.puntos) ? -1 : 0));
	}

	const equipos = [];
	const tablaOrdenada = equipos.sort(ordenarCompletados2());

	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell>Equipo</TableCell>
						<TableCell align="right">Puntos</TableCell>
						<TableCell align="right">Goles a favor</TableCell>
						<TableCell align="right">Goles en contra</TableCell>
						<TableCell align="right">Diferencia de goles</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow key={row.nombreEquipo}>
							<TableCell component="th" scope="row">
								{row.nombreEquipo}
							</TableCell>
							<TableCell align="right">{row.puntos}</TableCell>
							<TableCell align="right">{row.gF}</TableCell>
							<TableCell align="right">{row.gC}</TableCell>
							<TableCell align="right">{row.dG}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Paper>
	);
}
