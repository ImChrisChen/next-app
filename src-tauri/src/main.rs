// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
  tauri::Builder::default()
    .run(tauri::generate_context!())
    // .invoke_handler(tauri::generate_handler![open_link])
    .expect("error while running tauri application");
}

// #[tauri::command]
// fn open_link(url: String) {
//   if let Err(e) = webview_manager::open(&url) {
//     eprintln!("Failed to open link: {}", e);
//   }
// }
