import SwiftUI

struct WelcomeView: View {
    @State private var username: String = ""
    @State private var password: String = ""
    @State private var isAuthenticated = false
    @State private var showingAlert = false

    var body: some View {
        NavigationStack {
            VStack {
                
                Image("logo")
                    .resizable()
                    .scaledToFit()
                    .frame(maxWidth: .infinity, maxHeight: .infinity)

                Spacer()

                Text("CampuSafe")
                    .font(.largeTitle)
                    .padding()

                TextField("Username", text: $username)
                    .padding()
                    .autocapitalization(.none)
                    .background(Color.gray.opacity(0.2))
                    .cornerRadius(5)
                    .padding(.bottom, 15)

                SecureField("Password", text: $password)
                    .padding()
                    .autocapitalization(.none)
                    .background(Color.gray.opacity(0.2))
                    .cornerRadius(5)
                    .padding(.bottom, 20)

                Button("Login") {
                    self.login()
                }
                
                .padding()
                .frame(maxWidth: .infinity)
                .background(Color.green)
                .foregroundColor(.white)
                .cornerRadius(10)
                .padding(.bottom, 10)
                .alert("User doesn't exist or password wrong!", isPresented: $showingAlert) {
                    Button("OK", role: .cancel) { }
                }
                .navigationDestination(isPresented: $isAuthenticated) {
                                    MainView()
                                }

                Button("Sign Up") {
                  
                }
                .padding()
                .frame(maxWidth: .infinity)
                .background(Color.green)
                .foregroundColor(.white)
                .cornerRadius(10)
            }
            .padding()
            .navigationBarBackButtonHidden(true)  
        }
    }

    func login() {
        if username == "11" && password == "111" {
            isAuthenticated = true
        } else {
            showingAlert = true
        }
    }
}

struct MainView_Previews: PreviewProvider {
    static var previews: some View {
        WelcomeView()
    }
}


