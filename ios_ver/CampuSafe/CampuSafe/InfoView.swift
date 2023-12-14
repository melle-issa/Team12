import SwiftUI

struct WebResource: Identifiable {
    let id = UUID()
    let title: String
    let description: String
    let urlString: String
}

struct InfoView: View {
    let webResources = [
        WebResource(title: "UCR Incident Report Form", description: "If your circumstance is not an emergent matter, here is the official UCR form for reporting any suspicious activity or violence on campus.", urlString: "https://docs.google.com/forms/d/e/1FAIpQLSfNr-lSoy8ysvgO5Zo6Rab7-tTUGOKHCnTT5XQEJsS4tDxoLA/viewform"),
        WebResource(title: "UCR Mental Health Emergency Resources", description: "Students in immediate need of mental health support should click the link below to discover resources to help them through their difficult time.", urlString: "https://studentwellness.ucr.edu/emergency-resources"),
        WebResource(title: "UCR Safety Escort Service", description: "Reach out to the university escort service for an on-campus escort should you feel scared walking to your car or class at night.", urlString: "https://wrc.ucr.edu/programs/campus-safety-escort-service"),
        WebResource(title: "Emergency and After Hours Medical Care", description: "For students facing a health emergency or needing care after the provided window, please visit the following link to seek care at the closest hospitals.", urlString: "https://studenthealth.ucr.edu/emergency?_gl=1*ig5kbn*_ga*MjA0OTEwMDAxMy4xNjk2NzA2ODQz*_ga_S8BZQKWST2*MTcwMjQzNTA5My4yMC4xLjE3MDI0MzU2NzEuMC4wLjA.*_ga_Z1RGSBHBF7*MTcwMjQzNTA5My4yMC4xLjE3MDI0MzU2NzEuMC4wLjA."),
        WebResource(title: "UCR Safety and Crime Prevention", description: "Follow the link below to learn more about suggested actions that students from UCR can take to prevent crime on and off campus.", urlString: "https://police.ucr.edu/safety-crime-prevention-campus-safety"),
        WebResource(title: "Hazardous Waste Pickup", description: "Should you notice any hazardous waste on campus - especially if it pertains to mishandled lab matter - use the link below to properly alert someone about it.", urlString: "https://ehs.ucr.edu/waste#how_do_i_request_hazardous_waste_pick_up"),
        WebResource(title: "UCR Safety Resource Guide", description: "Here you can find the official UCR Saftey Resource Guide in order to educate yourself on the best practices to do in order to remain safe on campus.", urlString: "https://police.ucr.edu/sites/default/files/2022-02/ucrpd-safety-resource-guide-v2.pdf")
    ]
    
    var body: some View {
        List(webResources) { resource in
            VStack(alignment: .leading) {
                Text(resource.title)
                    .font(.headline)
                Text(resource.description)
                    .font(.subheadline)
                Link("Click Here", destination: URL(string: resource.urlString)!)
                    .font(.footnote)
                    .foregroundColor(.blue)
            }
            .padding()
        }
        .navigationTitle("Information")
    }
}

