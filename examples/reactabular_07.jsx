<Table.Provider columns={columns}>
  <Table.Header>
    <SearchColumns columns={columns} query={query} onChange={this.onSearch} />
  </Table.Header>

  <Table.Body onRow={this.onRow} rows={rows} rowKey="id" />

  <CustomFooter columns={columns} rows={rows} />
</Table.Provider>
