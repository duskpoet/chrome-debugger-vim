| Function name | Parameters | Return |
| ------------- | ---------- | ------ |
| nvim_buf_line_count | *Buffer* buffer | Integer |
| buffer_get_line | *Buffer* buffer, *Integer* index | String |
| buffer_set_line | *Buffer* buffer, *Integer* index, *String* line | void |
| buffer_del_line | *Buffer* buffer, *Integer* index | void |
| buffer_get_line_slice | *Buffer* buffer, *Integer* start, *Integer* end, *Boolean* include_start, *Boolean* include_end | ArrayOf(String) |
| nvim_buf_get_lines | *Buffer* buffer, *Integer* start, *Integer* end, *Boolean* strict_indexing | ArrayOf(String) |
| buffer_set_line_slice | *Buffer* buffer, *Integer* start, *Integer* end, *Boolean* include_start, *Boolean* include_end, *ArrayOf(String)* replacement | void |
| nvim_buf_set_lines | *Buffer* buffer, *Integer* start, *Integer* end, *Boolean* strict_indexing, *ArrayOf(String)* replacement | void |
| nvim_buf_get_var | *Buffer* buffer, *String* name | Object |
| nvim_buf_set_var | *Buffer* buffer, *String* name, *Object* value | void |
| nvim_buf_del_var | *Buffer* buffer, *String* name | void |
| buffer_set_var | *Buffer* buffer, *String* name, *Object* value | Object |
| buffer_del_var | *Buffer* buffer, *String* name | Object |
| nvim_buf_get_option | *Buffer* buffer, *String* name | Object |
| nvim_buf_set_option | *Buffer* buffer, *String* name, *Object* value | void |
| nvim_buf_get_number | *Buffer* buffer | Integer |
| nvim_buf_get_name | *Buffer* buffer | String |
| nvim_buf_set_name | *Buffer* buffer, *String* name | void |
| nvim_buf_is_valid | *Buffer* buffer | Boolean |
| buffer_insert | *Buffer* buffer, *Integer* lnum, *ArrayOf(String)* lines | void |
| nvim_buf_get_mark | *Buffer* buffer, *String* name | ArrayOf(Integer, 2) |
| nvim_buf_add_highlight | *Buffer* buffer, *Integer* src_id, *String* hl_group, *Integer* line, *Integer* col_start, *Integer* col_end | Integer |
| nvim_buf_clear_highlight | *Buffer* buffer, *Integer* src_id, *Integer* line_start, *Integer* line_end | void |
| nvim_tabpage_list_wins | *Tabpage* tabpage | ArrayOf(Window) |
| nvim_tabpage_get_var | *Tabpage* tabpage, *String* name | Object |
| nvim_tabpage_set_var | *Tabpage* tabpage, *String* name, *Object* value | void |
| nvim_tabpage_del_var | *Tabpage* tabpage, *String* name | void |
| tabpage_set_var | *Tabpage* tabpage, *String* name, *Object* value | Object |
| tabpage_del_var | *Tabpage* tabpage, *String* name | Object |
| nvim_tabpage_get_win | *Tabpage* tabpage | Window |
| nvim_tabpage_get_number | *Tabpage* tabpage | Integer |
| nvim_tabpage_is_valid | *Tabpage* tabpage | Boolean |
| nvim_ui_attach | *Integer* width, *Integer* height, *Dictionary* options | void |
| ui_attach | *Integer* width, *Integer* height, *Boolean* enable_rgb | void |
| nvim_ui_detach |  | void |
| nvim_ui_try_resize | *Integer* width, *Integer* height | void |
| nvim_ui_set_option | *String* name, *Object* value | void |
| nvim_command | *String* command | void |
| nvim_feedkeys | *String* keys, *String* mode, *Boolean* escape_csi | void |
| nvim_input | *String* keys | Integer |
| nvim_replace_termcodes | *String* str, *Boolean* from_part, *Boolean* do_lt, *Boolean* special | String |
| nvim_command_output | *String* str | String |
| nvim_eval | *String* expr | Object |
| nvim_call_function | *String* fname, *Array* args | Object |
| nvim_strwidth | *String* str | Integer |
| nvim_list_runtime_paths |  | ArrayOf(String) |
| nvim_set_current_dir | *String* dir | void |
| nvim_get_current_line |  | String |
| nvim_set_current_line | *String* line | void |
| nvim_del_current_line |  | void |
| nvim_get_var | *String* name | Object |
| nvim_set_var | *String* name, *Object* value | void |
| nvim_del_var | *String* name | void |
| vim_set_var | *String* name, *Object* value | Object |
| vim_del_var | *String* name | Object |
| nvim_get_vvar | *String* name | Object |
| nvim_get_option | *String* name | Object |
| nvim_set_option | *String* name, *Object* value | void |
| nvim_out_write | *String* str | void |
| nvim_err_write | *String* str | void |
| nvim_err_writeln | *String* str | void |
| nvim_list_bufs |  | ArrayOf(Buffer) |
| nvim_get_current_buf |  | Buffer |
| nvim_set_current_buf | *Buffer* buffer | void |
| nvim_list_wins |  | ArrayOf(Window) |
| nvim_get_current_win |  | Window |
| nvim_set_current_win | *Window* window | void |
| nvim_list_tabpages |  | ArrayOf(Tabpage) |
| nvim_get_current_tabpage |  | Tabpage |
| nvim_set_current_tabpage | *Tabpage* tabpage | void |
| nvim_subscribe | *String* event | void |
| nvim_unsubscribe | *String* event | void |
| nvim_get_color_by_name | *String* name | Integer |
| nvim_get_color_map |  | Dictionary |
| nvim_get_api_info |  | Array |
| nvim_call_atomic | *Array* calls | Array |
| nvim_win_get_buf | *Window* window | Buffer |
| nvim_win_get_cursor | *Window* window | ArrayOf(Integer, 2) |
| nvim_win_set_cursor | *Window* window, *ArrayOf(Integer, 2)* pos | void |
| nvim_win_get_height | *Window* window | Integer |
| nvim_win_set_height | *Window* window, *Integer* height | void |
| nvim_win_get_width | *Window* window | Integer |
| nvim_win_set_width | *Window* window, *Integer* width | void |
| nvim_win_get_var | *Window* window, *String* name | Object |
| nvim_win_set_var | *Window* window, *String* name, *Object* value | void |
| nvim_win_del_var | *Window* window, *String* name | void |
| window_set_var | *Window* window, *String* name, *Object* value | Object |
| window_del_var | *Window* window, *String* name | Object |
| nvim_win_get_option | *Window* window, *String* name | Object |
| nvim_win_set_option | *Window* window, *String* name, *Object* value | void |
| nvim_win_get_position | *Window* window | ArrayOf(Integer, 2) |
| nvim_win_get_tabpage | *Window* window | Tabpage |
| nvim_win_get_number | *Window* window | Integer |
| nvim_win_is_valid | *Window* window | Boolean |
| buffer_line_count | *Buffer* buffer | Integer |
| buffer_get_lines | *Buffer* buffer, *Integer* start, *Integer* end, *Boolean* strict_indexing | ArrayOf(String) |
| buffer_set_lines | *Buffer* buffer, *Integer* start, *Integer* end, *Boolean* strict_indexing, *ArrayOf(String)* replacement | void |
| buffer_get_var | *Buffer* buffer, *String* name | Object |
| buffer_get_option | *Buffer* buffer, *String* name | Object |
| buffer_set_option | *Buffer* buffer, *String* name, *Object* value | void |
| buffer_get_number | *Buffer* buffer | Integer |
| buffer_get_name | *Buffer* buffer | String |
| buffer_set_name | *Buffer* buffer, *String* name | void |
| buffer_is_valid | *Buffer* buffer | Boolean |
| buffer_get_mark | *Buffer* buffer, *String* name | ArrayOf(Integer, 2) |
| buffer_add_highlight | *Buffer* buffer, *Integer* src_id, *String* hl_group, *Integer* line, *Integer* col_start, *Integer* col_end | Integer |
| buffer_clear_highlight | *Buffer* buffer, *Integer* src_id, *Integer* line_start, *Integer* line_end | void |
| tabpage_get_windows | *Tabpage* tabpage | ArrayOf(Window) |
| tabpage_get_var | *Tabpage* tabpage, *String* name | Object |
| tabpage_get_window | *Tabpage* tabpage | Window |
| tabpage_is_valid | *Tabpage* tabpage | Boolean |
| ui_detach |  | void |
| ui_try_resize | *Integer* width, *Integer* height | Object |
| vim_command | *String* command | void |
| vim_feedkeys | *String* keys, *String* mode, *Boolean* escape_csi | void |
| vim_input | *String* keys | Integer |
| vim_replace_termcodes | *String* str, *Boolean* from_part, *Boolean* do_lt, *Boolean* special | String |
| vim_command_output | *String* str | String |
| vim_eval | *String* expr | Object |
| vim_call_function | *String* fname, *Array* args | Object |
| vim_strwidth | *String* str | Integer |
| vim_list_runtime_paths |  | ArrayOf(String) |
| vim_change_directory | *String* dir | void |
| vim_get_current_line |  | String |
| vim_set_current_line | *String* line | void |
| vim_del_current_line |  | void |
| vim_get_var | *String* name | Object |
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
| window_get_option | *Window* window, *String* name | Object |
| window_set_option | *Window* window, *String* name, *Object* value | void |
| window_get_position | *Window* window | ArrayOf(Integer, 2) |
| window_get_tabpage | *Window* window | Tabpage |
| window_is_valid | *Window* window | Boolean |
