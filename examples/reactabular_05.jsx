var header = {
  onClick: (column) => {
    sortColumn(
        this.state.columns,
        column,
        this.state.data,
        this.setState.bind(this)
    );
  }
};