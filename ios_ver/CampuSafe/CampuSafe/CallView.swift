import SwiftUI

struct Contact: Identifiable {
    let id = UUID()
    let name: String
    let number: String
}

struct CallView: View {
    @State private var selectedContact: Contact?
    @State private var showingEmergencyAlert = false
    let emergencyNumber = "911"
    
    // Your example contacts list
    let contacts = [
        Contact(name: "UCR Police NON-EMERGENCY LINE", number: "951-827-5222"),
        Contact(name: "UCR 24/7 Crisis Counselor", number: "951-827-8255"),
        Contact(name: "24/7 Nurse Line", number: "877-351-3457"),
        Contact(name: "UCR Basic Needs", number: "951-827-3663")
    ]

    var body: some View {
        List {
            ForEach(contacts) { contact in
                HStack {
                    Text(contact.name)
                    Spacer()
                    Button(contact.number) {
                        self.selectedContact = contact
                    }
                    .foregroundColor(.blue)
                }
            }
            
            // Emergency contact information
            HStack {
                Text("IF YOU ARE IN EMERGENCY, CALL")
                    .font(.headline)
                    .foregroundColor(.red)
                Button("911") {
                    self.showingEmergencyAlert = true
                }
                .foregroundColor(.blue)
            }
            .frame(maxWidth: .infinity, alignment: .center)
        }
        .actionSheet(item: $selectedContact) { contact in
            ActionSheet(
                title: Text("Call \(contact.name)?"),
                buttons: [
                    .default(Text("Call \(contact.number)")) {
                        // Actual phone call logic
                        let telephone = "tel://"
                        guard let url = URL(string: "\(telephone)\(contact.number)") else { return }
                        UIApplication.shared.open(url)
                    },
                    .cancel()
                ]
            )
        }
        .alert(isPresented: $showingEmergencyAlert) {
            Alert(
                title: Text("Emergency Call"),
                message: Text("You are about to call the emergency number \(emergencyNumber)."),
                primaryButton: .destructive(Text("Call \(emergencyNumber)")) {
                    // Actual emergency call logic
                    let telephone = "tel://"
                    guard let url = URL(string: "\(telephone)\(emergencyNumber)") else { return }
                    UIApplication.shared.open(url)
                },
                secondaryButton: .cancel()
            )
        }
    }
}




