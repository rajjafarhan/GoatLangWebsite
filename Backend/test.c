#include <stdio.h>
#include <string.h>


struct Employee {
    char name[20]; 
    int id;
	long salary; 
};

void printEmployee(struct Employee e) {
	printf("Id: %d\n", e.id);
    printf("Name: %s\n", e.name);
    printf("Salary: %ld\n", e.salary);
    printf("\n");
}

int main() {
    FILE *fp; 

    struct Employee e = {"", 0};
    int choice;

    do {
        printf("Choose an option:\n");
        printf("1. Read data\n");
        printf("2. Write data\n");
        printf("Enter your choice (any other number to exit): ");
        scanf("%d", &choice);

        if (choice == 1) {
            while (1){
            	
			
            int idToRead;
            printf("Enter the roll number to read (enter -1 to stop reading): ");
            scanf("%d", &idToRead);
            
            if (idToRead == -1){
            	break;
			}

            if (!(fp = fopen("employee.txt", "r"))) {
                printf("File cannot be opened for reading.");
                return 0;
            }

            fseek(fp, (idToRead - 1) * sizeof(e), 0);

            fread(&e, sizeof(e), 1, fp);
            printEmployee(e);

            fclose(fp);
            }
        } else if (choice == 2) {
            if (!(fp = fopen("employee.txt", "r+"))) {
                printf("File cannot be opened for writing.");
                return 0;
            }

            while (1) {
         
                printf("Enter id from (1 to 100), -1 to stop writing: ");
                scanf("%d", &e.id);
                if (e.id == -1)
                    break;

                printf("Enter name: ");
                scanf("%s", e.name);
                printf("Enter salary: ");
                scanf("%d", &e.salary);

				fseek(fp,(e.id-1)*sizeof(e),0);
        		fwrite(&e, sizeof(e), 1, fp);
            }

            fclose(fp);
        } else {
            printf("Exiting program.\n");
            break;
        }
    } while (1);

    return 0;
}