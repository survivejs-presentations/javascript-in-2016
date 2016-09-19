columns: [
  {
    property: 'country',
    header: 'Country',
    formatter: country => find(countries, 'value', country).name,
    editor: editors.dropdown(countries)
  },
  {
    cell: (i => {
      var remove = () => {
        // This could go through flux etc.
        this.state.data.splice(i, 1);

        this.setState({ data: this.state.data });
      };

      return <span onClick={remove.bind(this)}>&#10007;</span>;
    }).bind(this)
  }
]