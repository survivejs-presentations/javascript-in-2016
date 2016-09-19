<Table columns={columns} events={events} data={data}>
  <tfoot>
    <tr>
      <td>
        <Paginator
          page={paginated.page}
          pages={paginated.amount}
          onSelect={this.onSelect}
        />
      </td>
    </tr>
  </tfoot>
</Table>
