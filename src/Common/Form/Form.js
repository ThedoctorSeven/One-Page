import React, { Component } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  withStyles
} from "material-ui";
import { DatePicker } from "material-ui-pickers";
import moment from "moment";
import "moment/locale/fr";
import PropTypes from "prop-types";
import simpleJoi from "joi";
const Joi = simpleJoi.extend(require("joi-phone-number"));

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: 16,
    marginBottom: 8,
    width: 200
  },
  menu: {
    width: 200
  }
});

moment.locale("fr");

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        firstname: "",
        mail: "",
        phoneNumber: "",
        msg: "",
        birthday: null
      },
      validation: {
        name: Joi.string()
          .min(2)
          .max(30)
          .required(),
        firstname: Joi.string()
          .min(2)
          .max(30)
          .required(),
        mail: Joi.string().email(),
        phoneNumber: Joi.string()
          .phoneNumber()
          .required(),
        msg: Joi.string()
          .min(5)
          .max(500)
          .required(),
        birthday: Joi.date().max("now")
      },
      errorMsg: {
        name: "",
        firstname: "",
        mail: "",
        phoneNumber: "",
        msg: "",
        birthday: ""
      }
    };
  }

  handleChange = name => event => {
    const { form } = this.state;
    this.setState({
      form: { ...form, [name]: event.target.value }
    });
    // ...form => copie colle tout ce qu'il y a à l'intérieur de form
    //name: "", firstname: "", mail: "", phoneNumber: "", msg: "", birthday: "", // => puis on ajoute la nouvelle valeur qui va écrasé la précédente déclaré
    // en gros on fait => nom:"toto", prenom:"whatever", nom:"Henry"  Ce qui nous sort {nom:"Henry, prenom:"whatever"}
    //et ce nouvelle objet on le met dans form
  };

  handleDateChange = birthday => {
    const { form, validation, errorMsg } = this.state;
    const test = Joi.validate(birthday.toDate(), validation["birthday"]); // do something with that
    console.log(test);
    this.setState({
      form: { ...form, birthday: birthday },
      errorMsg: { ...errorMsg, birthday: test.error }
    });
  };

  validateVal = name => event => {
    const { validation, errorMsg } = this.state;
    const test = Joi.validate(event.target.value, validation[name]); // do something with that
    this.setState({
      errorMsg: { ...errorMsg, [name]: test.error }
    });
  };

  onSubmit = () => {
    let data = null;
    if (!this.state.form.birthday) data = this.state.form;
    else {
      data = {
        ...this.state.form,
        birthday: this.state.form.birthday.toDate()
      };
    }
    const result = Joi.validate(data, Joi.object({ ...this.state.validation }));
    console.log(result, result.value);
    if (!result.error) alert("Tout va bien");
    else alert("Des erreurs on été relevées dans le formulaire");
  };

  render() {
    const { classes } = this.props;
    const { form, errorMsg } = this.state;
    return (
      <Card>
        <CardHeader
          title="Formulaire de contact"
          subheader="Tous les champs doivent être valide pour envoyer un message"
        />
        <CardContent>
          <form className={classes.container}>
            <DatePicker
              clearable
              required
              error={!!errorMsg.birthday}
              openToYearSelection
              label="Naissance"
              okLabel={"Valider"}
              cancelLabel={"Annuler"}
              clearLabel={"Vider"}
              format={"dddd D MMM YYYY"}
              className={classes.textField}
              value={form.birthday}
              onChange={this.handleDateChange}
              onBlur={this.validateVal("birthday")}
              animateYearScrolling={false}
            />
            <TextField
              error={!!errorMsg.name}
              required
              id="name"
              label="Nom"
              className={classes.textField}
              value={form.name}
              onChange={this.handleChange("name")}
              onBlur={this.validateVal("name")}
              margin="normal"
            />
            <TextField
              error={!!errorMsg.firstname}
              required
              id="firstname"
              label="Prénom"
              className={classes.textField}
              value={form.firstname}
              onChange={this.handleChange("firstname")}
              onBlur={this.validateVal("firstname")}
              margin="normal"
            />
            <TextField
              error={!!errorMsg.mail}
              required
              type="email"
              id="mail"
              label="E-mail"
              value={form.mail}
              onChange={this.handleChange("mail")}
              className={classes.textField}
              onBlur={this.validateVal("mail")}
              margin="normal"
            />
            <TextField
              error={!!errorMsg.phoneNumber}
              required
              type="tel"
              id="phoneNumber"
              label="Numéro de téléphone"
              value={form.phoneNumber}
              onChange={this.handleChange("phoneNumber")}
              className={classes.textField}
              onBlur={this.validateVal("phoneNumber")}
              margin="normal"
            />
            <TextField
              multiline
              error={!!errorMsg.msg}
              required
              id="msg"
              label="Message"
              value={form.msg}
              onChange={this.handleChange("msg")}
              className={classes.textField}
              onBlur={this.validateVal("msg")}
              margin="normal"
            />
          </form>
        </CardContent>
        <CardActions>
          <Button onClick={this.onSubmit} raised color="primary">
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
