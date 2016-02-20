| Function name | Parameters | Return |
| ------------- | ---------- | ------ |
| buffer_line_count | *Buffer* buffer | Integer |
| buffer_get_line | *Buffer* buffer, *Integer* index | String |
| buffer_set_line | *Buffer* buffer, *Integer* index, *String* line | void |
| buffer_del_line | *Buffer* buffer, *Integer* index | void |
| buffer_get_line_slice | *Buffer* buffer, *Integer* start, *Integer* end, *Boolean* include_start, *Boolean* include_end | ArrayOf(String) |
| buffer_set_line_slice | *Buffer* buffer, *Integer* start, *Integer* end, *Boolean* include_start, *Boolean* include_end, *ArrayOf(String)* replacement | void |
| buffer_get_var | *Buffer* buffer, *String* name | Object |
| buffer_set_var | *Buffer* buffer, *String* name, *Object* value | Object |
| buffer_get_option | *Buffer* buffer, *String* name | Object |
| buffer_set_option | *Buffer* buffer, *String* name, *Object* value | void |
| buffer_get_number | *Buffer* buffer | Integer |
| buffer_get_name | *Buffer* buffer | String |
| buffer_set_name | *Buffer* buffer, *String* name | void |
| buffer_is_valid | *Buffer* buffer | Boolean |
| buffer_insert | *Buffer* buffer, *Integer* lnum, *ArrayOf(String)* lines | void |
| buffer_get_mark | *Buffer* buffer, *String* name | ArrayOf(Integer, 2) |
| tabpage_get_windows | *Tabpage* tabpage | ArrayOf(Window) |
| tabpage_get_var | *Tabpage* tabpage, *String* name | Object |
| tabpage_set_var | *Tabpage* tabpage, *String* name, *Object* value | Object |
| tabpage_get_window | *Tabpage* tabpage | Window |
| tabpage_is_valid | *Tabpage* tabpage | Boolean |
| vim_command | *String* str | void |
| vim_feedkeys | *String* keys, *String* mode, *Boolean* escape_csi | void |
| vim_input | *String* keys | Integer |
| vim_replace_termcodes | *String* str, *Boolean* from_part, *Boolean* do_lt, *Boolean* special | String |
| vim_command_output | *String* str | String |
| vim_eval | *String* str | Object |
| vim_call_function | *String* fname, *Array* args | Object |
| vim_strwidth | *String* str | Integer |
| vim_list_runtime_paths |  | ArrayOf(String) |
| vim_change_directory | *String* dir | void |
| vim_get_current_line |  | String |
| vim_set_current_line | *String* line | void |
| vim_del_current_line |  | void |
| vim_get_var | *String* name | Object |
| vim_set_var | *String* name, *Object* value | Object |
| vim_get_vvar | *String* name | Object |
| vim_get_option | *String* name | Object |
| vim_set_option | *String* name, *Object* value | void |
| vim_out_write | *String* str | void |
| vim_err_write | *String* str | void |
| vim_report_error | *String* str | void |
| vim_get_buffers |  | ArrayOf(Buffer) |
| vim_get_current_buffer |  | Buffer |
| vim_set_current_buffer | *Buffer* buffer | void |
| vim_get_windows |  | ArrayOf(Window) |
| vim_get_current_window |  | Window |
| vim_set_current_window | *Window* window | void |
| vim_get_tabpages |  | ArrayOf(Tabpage) |
| vim_get_current_tabpage |  | Tabpage |
| vim_set_current_tabpage | *Tabpage* tabpage | void |
| vim_subscribe | *String* event | void |
| vim_unsubscribe | *String* event | void |
| vim_name_to_color | *String* name | Integer |
| vim_get_color_map |  | Dictionary |
| vim_get_api_info |  | Array |
| window_get_buffer | *Window* window | Buffer |
| window_get_cursor | *Window* window | ArrayOf(Integer, 2) |
| window_set_cursor | *Window* window, *ArrayOf(Integer, 2)* pos | void |
| window_get_height | *Window* window | Integer |
| window_set_height | *Window* window, *Integer* height | void |
| window_get_width | *Window* window | Integer |
| window_set_width | *Window* window, *Integer* width | void |
| window_get_var | *Window* window, *String* name | Object |
| window_set_var | *Window* window, *String* name, *Object* value | Object |
| window_get_option | *Window* window, *String* name | Object |
| window_set_option | *Window* window, *String* name, *Object* value | void |
| window_get_position | *Window* window | ArrayOf(Integer, 2) |
| window_get_tabpage | *Window* window | Tabpage |
| window_is_valid | *Window* window | Boolean |
