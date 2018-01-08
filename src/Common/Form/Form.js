import React, { Component } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  withStyles,
  Icon
} from "material-ui";
import { DatePicker } from "material-ui-pickers";
import moment from "moment";
import PropTypes from "prop-types";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
});

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      firstname: "",
      mail: "",
      phoneNumber: "",
      msg: "",
      birthday: ""
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleDateChange = birthday => {
    this.setState({ birthday });
  };

  render() {
    const { classes } = this.props;

    return (
      <Card>
        <CardHeader
          title="Formulaire de contact"
          subheader="Tous les champs doivent être valide pour envoyer un message"
        />
        <CardContent>
          <form className={classes.container} noValidate autoComplete="off">
            <DatePicker
              keyboard
              clearable
              className={classes.textField}
              // value={selectedDate}
              onChange={this.handleDateChange}
              animateYearScrolling={false}
            />
            <TextField
              required
              id="name"
              label="Nom"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange("name")}
              margin="normal"
            />
            <TextField
              required
              id="firstname"
              label="Prénom"
              className={classes.textField}
              value={this.state.firstname}
              onChange={this.handleChange("firstname")}
              margin="normal"
            />
            <TextField
              required
              id="mail"
              label="Mél"
              value={this.state.firstname}
              onChange={this.handleChange("mail")}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              required
              id="phoneNumber"
              label="Numéro de téléphone"
              value={this.state.firstname}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              required
              id="msg"
              label="Message"
              value={this.state.firstname}
              className={classes.textField}
              margin="normal"
            />
          </form>
        </CardContent>
        <CardActions>
          <Button raised color="primary">
            Envoyer
          </Button>
        </CardActions>
      </Card>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
