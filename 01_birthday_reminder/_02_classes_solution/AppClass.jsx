import data from "../data";
import List from "./ListClass";
import React, { Component } from "react";

import { StyleSheet, Text, View, Pressable } from "react-native";

export default class AppClass extends Component {
  state = {
    people: data,
  };

  handleRemoveOnePerson = (id) =>
    this.setState((prevState) => ({
      people: prevState.people.filter((person) => person.id !== id),
    }));

  handleEmpty = () => this.setState(() => ({ people: [] }));
  handleRefresh = () => this.setState(() => ({ people: data }));

  render() {
    return (
      <View style={styles.appFunction}>
        <Text style={styles.header}>class components</Text>

        {this.state.people.length > 1 && (
          <Text style={styles.title}>
            {this.state.people.length} friends to contact
          </Text>
        )}

        {(this.state.people.length === 1 || this.state.people.length === 0) && (
          <Text style={styles.title}>
            {this.state.people.length} friend to contact
          </Text>
        )}

        <List
          people={this.state.people}
          handleRemoveOnePerson={this.handleRemoveOnePerson}
          style={styles.list}
        />

        {this.state.people.length !== 0 && (
          <Pressable onPress={this.handleEmpty}>
            <Text style={styles.action}>Clear All</Text>
          </Pressable>
        )}

        {this.state.people.length === 0 && (
          <Pressable onPress={this.handleRefresh}>
            <Text style={styles.action}>Refresh</Text>
          </Pressable>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appFunction: {
    padding: 30,
    marginVertical: 30,
    marginHorizontal: 20,
    borderRadius: 6,
    backgroundColor: "#fff",
  },

  header: {
    textTransform: "capitalize",
    borderLeftWidth: 10,
    paddingLeft: 15,
    borderLeftColor: "#1f7a1f",
    fontSize: 22,
    color: "#1f7a1f",
  },

  title: {
    color: "#1f7a1f",
    marginVertical: 10,
    textAlign: "center",
    fontSize: 20,
    textTransform: "capitalize",
  },
  action: {
    backgroundColor: "#1f7a1f",
    color: "#fff",
    textAlign: "center",
    padding: 8,
    borderRadius: 6,
    fontSize: 18,
    marginTop: 30,
  },
});
