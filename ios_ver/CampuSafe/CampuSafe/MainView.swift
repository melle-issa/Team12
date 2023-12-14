import SwiftUI

struct MainView: View {
    @State private var showingSettings = false
    @State private var showingProfile = false
    @State private var showingLogoutConfirmation = false
    @State private var shouldNavigateToWelcome = false

    var body: some View {
        NavigationStack {
            VStack {

                //Spacer()


                TabView {

                    MapView()
                        .tabItem {
                            Image(systemName: "map.fill") // 使用系统图标
                            Text("Map")
                        }

                    CallView()
                        .tabItem {
                            Image(systemName: "phone.fill")
                            Text("Calling")
                        }

                    InfoView()
                        .tabItem {
                            Image(systemName: "info.circle")
                            Text("Information")
                        }
                }
                //.frame(height: 700)
            }
            .navigationTitle("CampuSafe")
            .navigationBarItems(trailing: MenuButton(showingSettings: $showingSettings, showingProfile: $showingProfile, showingLogout: $showingLogoutConfirmation))
            .navigationBarBackButtonHidden(true)
            .sheet(isPresented: $showingSettings) {
                SettingView()
            }
            .sheet(isPresented: $showingProfile) {
                ProfileView()
            }
            .alert("Are you sure you want to logout?", isPresented: $showingLogoutConfirmation) {
                Button("Logout", role: .destructive) {
                    shouldNavigateToWelcome = true
                }
                Button("Cancel", role: .cancel) { }
            }
            .navigationDestination(isPresented: $shouldNavigateToWelcome) {
                WelcomeView()
            }
        }
          
    }
}

struct MenuButton: View {
    @Binding var showingSettings: Bool
    @Binding var showingProfile: Bool
    @Binding var showingLogout: Bool

    var body: some View {
        Menu {
            Button("Setting") {
                showingSettings = true
            }
            Button("Profile") {
                showingProfile = true
            }
            Button("Logout") {
                showingLogout = true
            }
        } label: {
            Image(systemName: "line.horizontal.3")
                .imageScale(.large)
        }
    }
}

// 定义 SettingView
struct SettingView: View {
    var body: some View {
        Text("Settings Page")
    }
}

struct ProfileView: View {
    let userName = "YourUserName"
    let email = "user@example.com"

    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            Text("User Profile")
                .font(.largeTitle)
                .padding(.bottom, 20)

            HStack {
                Text("User Name:")
                    .font(.headline)
                Spacer()
                Text(userName)
                    .font(.body)
            }

            HStack {
                Text("Email:")
                    .font(.headline)
                Spacer()
                Text(email)
                    .font(.body)
            }
        }
        .padding()
        .navigationTitle("Profile")
    }
}






