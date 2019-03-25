import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import DescriptionIcon from "@material-ui/icons/Description";
import ButtonBar from "./ButtonBar";

const styles = theme => ({
  root: {},
  paper: {
    marginleft: theme.spacing.unit * 30,
    padding: theme.spacing.unit * 3,
    textAlign: "left",
    color: theme.palette.text.secondary,
    width: "850px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
      width: "100%",
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2,
      marginLeft: 0
    }
  },
  eventName: {
    color: "#e91e63"
  },
  eventND: {
    width: "650px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
      width: "100%",
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2,
      marginLeft: 0
    }
  },
  eboxrow: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
      width: "100%",
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2,
      marginLeft: 0
    }
  },
  itemContainer: {},
  baseline: {},
  inline: {
    display: "inline-block",
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 1,
    marginTop: theme.spacing.unit * 1
  },
  backButton: {
    marginRight: theme.spacing.unit * 2
  }
});

class EventItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.paper}>
          <div className={classes.eboxrow}>
            <div className={classes.eventND}>
              <Typography
                className={classes.eventName}
                component="h2"
                variant="headline"
                gutterBottom
              >
                {this.props.en}
              </Typography>
              <Typography variant="subheading" gutterBottom>
                {this.props.ed}
              </Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div className={classes.inline}>
                  <Typography
                    style={{ color: "#4a148c" }}
                    component="h2"
                    variant="body2"
                    gutterBottom
                  >
                    Location
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {this.props.eL}
                  </Typography>
                </div>
                <div className={classes.inline}>
                  <Typography
                    style={{ color: "#4a148c" }}
                    component="h2"
                    variant="body2"
                    gutterBottom
                  >
                    Event Date
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {this.props.edt}
                  </Typography>
                </div>
              </div>
              <div>
                <ButtonBar />
              </div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(EventItem);
